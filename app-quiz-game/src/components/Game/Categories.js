import { Fragment } from 'react';

import CategoryItem from './CategoryItem';
import classes from './Game.module.css';

const CAT_1 = [
  { category: 'General knowledge', id: 9 },
  { category: 'Films', id: 11 },
  { category: 'Video games', id: 15 },
  { category: 'Science & Nature', id: 17 },
  { category: 'Sports', id: 21 },
];

const CAT_2 = [
  { category: 'Geography', id: 22 },
  { category: 'History', id: 23 },
  { category: 'Art', id: 25 },
  { category: 'Animals', id: 27 },
  { category: 'Vehicles', id: 28 },
];

const Categories = () => {
  return (
    <Fragment>
      <p className={classes.highlight}>Choose category:</p>
      <div className={classes.categories}>
        <section>
          {CAT_1.map(c => (
            <CategoryItem key={c.id} data={c} />
          ))}
        </section>
        <section>
          {CAT_2.map(c => (
            <CategoryItem key={c.id} data={c} />
          ))}
        </section>
      </div>
    </Fragment>
  );
};

export default Categories;
