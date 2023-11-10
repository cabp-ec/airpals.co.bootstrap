import { AppModal } from './components/molecules/app.modal/app.modal';
import { PageHeader } from './components/atoms/page.header/page.header';
import { SearchForm } from './components/molecules/search.form/search.form';
import { useContext, useState } from 'react';
import PlacesSearchContext from './app/context/places.search.context';

const App = () => {
  const headerParagraphs = [
    'So we know where to drop off the stuff',
    'We won\'t share your address with your ex (or whoever)'
  ];
  const modalTitle = {
    0: 'Out of delivery area',
    1: 'Address updated'
  };
  const modalParagraphs = {
    0: [
      '"Wherever I go, there I am."',
      'Sadly, this quote is not truth for us. In other words, we are not operating in your area (yet), but things change every day.',
      'Sign up to our newsletter to get notified.'
    ],
    1: [
      'New address added to your account',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus lobortis risus, id placerat turpis euismod vestibulum.',
      'Sed eu ullamcorper dolor, at ullamcorper sapien.'
    ]
  };
  const placesSearch = useContext(PlacesSearchContext);
  const [validResult, setValidResult] = useState<boolean>(false);
  const [selectedResult, setSelectedResult] = useState<object>();
  console.log('Selected Place', selectedResult);
  console.log('validResult', Number(validResult));

  /**
   * Get the x for the AppModal component
   *
   * @return string
   */
  const getModalTitle = (): string => {
    return modalTitle[Number(validResult)];
  };

  /**
   * Get the x for the AppModal component
   *
   * @return string[]
   */
  const getModalParagraphs = (): string[] => {
    return modalParagraphs[Number(validResult)];
  };

  /**
   * Event listener for the 'result select' event
   *
   * @param result
   */
  const onResultSelect = (result) => {
    setSelectedResult(result);
    setValidResult(placesSearch.validateResult(result));
  };

  return <div className="d-flex flex-column pt-5 h-100 w-100">
    <PageHeader title="Where are you located?" paragraphs={ headerParagraphs }/>
    <SearchForm onResultSelect={ onResultSelect }/>
    <AppModal title={ getModalTitle() } closeLabel="Understood" paragraphs={ getModalParagraphs() }/>
  </div>;
};

export default App;
