export default () => ({
  openModal: (state, config) => ({
    modalSettings: { isOpen: true, ...config }
  }),
  closeModal: () => ({ modalSettings: false })
});
