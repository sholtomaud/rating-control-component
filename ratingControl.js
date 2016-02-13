var crel = require('crel'),
    doc = require('doc-js'),
    ratingControl = require('rating-control'),
    defaultCss = require('defaultcss');

defaultCss('rating-control-component', '.rating-control-component{position:fixed;top:0;bottom:0;left:0;right:0;}.rating-control-component .content{background:white}');

module.exports = function(fastn, component, type, settings, children){
    
    component.extend('_generic', settings, children);

    component._type = 'ratingControl';
    component._attachChildren = false;

    component.render = function(){
        
        component.element = crel('div', {class: 'rating-control-component'});

        component.ratingControl = new ratingControl(settings);        

        component.ratingControlElement = crel('div', {'class':'rating-control-component'},
            component.containerElement = component.contentElement = crel('div', {'class':'content'})
        );

        component.emit('render');

        document.addEventListener('click', handler, true);

        component.on('destroy', function(){
            document.removeEventListener('click', handler, true);
            updateShow(false);
        });

        return component;
    };
    component._insert = function(element, index){
        if(!component.contentElement){
            return;
        }

        if(component.contentElement.childNodes[index] === element){
            return;
        }

        component.contentElement.insertBefore(element, component.contentElement.childNodes[index]);
    };
    return component;
};

module.exports.expectedComponents = ['text', '_generic', 'list', 'templater'];