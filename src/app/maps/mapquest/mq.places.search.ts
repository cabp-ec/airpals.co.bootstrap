const MqPlacesSearch = (input: HTMLInputElement, onResultSelect: (result) => void): void => {
  // TODO: get the key from a .env file
  const key = '51DFpOQwrL4tAhB0uN8NInhK4yCDUysQ';

  window.placeSearch({
    key,
    container: input,
    useDeviceLocation: true,
    limit: 3,
    collection: [
      'poi'
    ],
    templates: {
      value: (result) => (result.name),
      suggestion: (result) => {
        return `<div
    data-bs-toggle="modal"
    data-bs-target="#appModal"
    class="d-flex justify-content-center align-items-center border border-secondary-subtle rounded shadow-sm cursor-pointer"
  >
  <i class="bi bi-geo-alt-fill px-3"/>
  <div class="d-flex flex-column align-items-start py-3 w-100 bg-white">
    <p class="fw-bold m-0">${ result.name }</p>
    <p class="m-0">${ result.city }, ${ result.stateCode }, ${ result.countryCode }</p>
  </div>
</div>`;
      }
    }
  }).on('change', (e) => {
    onResultSelect(e.result);
  });
};

export default MqPlacesSearch;
