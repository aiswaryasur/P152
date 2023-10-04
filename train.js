AFRAME.registerComponent('train',{
    schema:{
        clickCounter:{type:'number', default:0},
        rotation:{type:'number', default:0},

    },

        update: function() {
            window.addEventListener("click", e => {
            this.data.rotation = this.el.getAttribute("rotation");
            var train_rotation = this.data.rotation
            this.data.clickCounter = this.data.clickCounter + 1;
            if (this.data.clickCounter == 1) {
            train_rotation = {x:90,y:0,z:0}
            this.el.setAttribute("rotation",train_rotation); 
            } 
            else if (this.data.clickCounter === 2) {
            train_rotation = {x:-90,y:0,z:0}
            this.el.setAttribute("rotation", train_rotation); 
            }
            else{
            train_rotation = 0;
            this.el.setAttribute("rotation", train_rotation); 
            }
        }
)}
})