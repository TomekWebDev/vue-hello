var app = new Vue(
    {
        el: '#root',
        data: {
            textColor: 'text-danger',
            titleContent: 'ciao',
            mainImage: 'https://picsum.photos/300/300',
            background: 'bg-green',
            classeBootstrap: 'btn btn-outline-primary mx-1 my-1 px-1 py-1',
            classeBootstrap2: 'btn btn-outline-success mx-1 my-1 px-2 py-2',
        },
        methods: {
            changeColor: function(){
                if(this.textColor == 'text-danger'){
                    return this.textColor = 'text-primary'
                 } 
                 return this.textColor = 'text-danger'
            },
            changeImage: function(){
                if(this.mainImage == 'https://picsum.photos/300/300'){
                    return this.mainImage = 'https://picsum.photos/300/300/'
                }
                return this.mainImage = 'https://picsum.photos/300/300'
            },
            changeBackground: function(){
                if(this.background == 'bg-green'){
                    return this.background = 'bg-red'
                }
                return this.background = 'bg-green'
            },
            changeBtn: function(){
                if(this.classeBootstrap == 'btn btn-outline-primary mx-1 my-1 px-1 py-1'){
                    return this.classeBootstrap = this.classeBootstrap2
                }
                return this.classeBootstrap = 'btn btn-outline-primary mx-1 my-1 px-1 py-1'
            }

        }
    }
);

