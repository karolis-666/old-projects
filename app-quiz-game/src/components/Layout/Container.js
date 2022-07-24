import Title from './Title';
import classes from './Layout.module.css';

const Container = props => {
  return (
    <div className={classes.container}>
      <Title />
      <main className={classes.box}>{props.children}</main>
    </div>
  );
};

export default Container;
