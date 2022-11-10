var app = new Vue(
    {
        el: '#root',
        data: {
            textColor: 'text-danger',
            titleContent: 'ciao',
            mainImage: 'https://picsum.photos/300/300',
            background: 'bg-green'
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
            }

        }
    }
);

