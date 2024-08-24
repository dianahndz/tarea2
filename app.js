const { createApp, ref } = Vue;

createApp({
  setup() {
    const frasesOriginales = [
        
      { frase: 'La programación no es para escribir el código, sino para resolver problemas.', autor: 'John Johnson' },
      { frase: 'Primero, resuelve el problema. Luego, escribe el código.', autor: 'John Johnson' },
      { frase: 'El código más eficiente es el que no se escribe.', autor: 'Bill Gates' },
      { frase: 'Cualquier código que hayas escrito más de seis meses atrás es como si lo hubiera escrito otra persona.', autor: 'Bob Martin' },
      { frase: 'No te preocupes si no funciona bien. Si todo estuviera bien, no estarías en el trabajo.', autor: 'Mosher’s Law of Software Engineering' }
    ];

    const frases = ref([...frasesOriginales]);
    const nuevaFrase = ref({ frase: '', autor: '' });
    const mensajeReinicioVisible = ref(false);

    const agregarFrase = () => {
      if (!nuevaFrase.value.frase || !nuevaFrase.value.autor) {
        alert('Por favor, completa ambos campos antes de añadir la frase.');
        return;
      }
      frases.value.push({ frase: nuevaFrase.value.frase, autor: nuevaFrase.value.autor });
      nuevaFrase.value.frase = '';
      nuevaFrase.value.autor = '';
      mensajeReinicioVisible.value = false;
    };

    const reiniciarFrases = () => {
      frases.value = [...frasesOriginales];
      mensajeReinicioVisible.value = true;
    };

    return {
      frases,
      nuevaFrase,
      agregarFrase,
      reiniciarFrases,
      mensajeReinicioVisible,
    };
  }
}).mount('#app');
