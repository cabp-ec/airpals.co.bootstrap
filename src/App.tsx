import { AppModal } from './components/molecules/app.modal/app.modal';
import { PageHeader } from './components/atoms/page.header/page.header';
import { SearchForm } from './components/molecules/search.form/search.form';

const App = () => {
  const headerParagraphs = [
    'So we know where to drop off the stuff',
    'We won\'t share your address with your ex (or whoever)'
  ];
  const modalParagraphs = [
    'New address added to your account',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus lobortis risus, id placerat turpis euismod vestibulum.',
    'Sed eu ullamcorper dolor, at ullamcorper sapien.'
  ];

  return <div className="d-flex flex-column pt-5 h-100 w-100">
    <PageHeader title="Where are you located?" paragraphs={ headerParagraphs }/>
    <SearchForm/>
    <AppModal title="Address updated" closeLabel="Understood" paragraphs={ modalParagraphs }/>
  </div>;
};

export default App;
