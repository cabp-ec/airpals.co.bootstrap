import { MapsServicesEnum } from './maps.services.enum';
import MqPlacesSearch from './mapquest/mq.places.search';
import { validCodes } from '../../../config/validCodes';

// TODO: Get the preferred service index and zipcode key from the environment (e.g. AWS, .env file, builder config)
const serviceIndex = MapsServicesEnum.mapquest;
const zipcodeKey = 'postalCode';

const PlacesSearch = {
  setup: (input: HTMLInputElement, onResultSelect: (result) => void): void => {
    switch (serviceIndex) {
      case MapsServicesEnum.mapquest:
      default:
        return MqPlacesSearch(input, onResultSelect);
    }
  },
  validateResult: (result: object): boolean => {
    return validCodes.includes(String(result[zipcodeKey]));
  }
};

export default PlacesSearch;
