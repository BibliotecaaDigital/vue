new Vue({
    el: '#seccion',
    data: {
        texto: '',
        estado: true,
        cambio: 'Ocultar',
    },
    methods: {
        saludar() {
            this.texto = 'Hola mundo desde un métodorongo';
        },
        saludar2(texto) {
            this.texto = texto;
        },
        cambiar() {
            this.estado = !this.estado;
            if (this.estado)
                this.cambio = 'Ocultar';
            else
                this.cambio = 'Mostrar';
        }
    }
});
