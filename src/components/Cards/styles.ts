import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5),
    justifyContent: 'center',
  },
  card: {
    margin: '0 2% 5% 0 !important',
    minWidth: '150px',
    color: 'red',
  },
  active: {
    borderTop: '10px solid rgba(120, 0, 255, 0.5)',
    backgroundColor: 'rgba(105, 0, 240, 1)',
    color: 'white',
  },
  cases: {
    borderTop: '10px solid rgba(255,25,105, 0.5)',
    backgroundColor: 'rgba(210,69,0, 1)',
    color: 'white',
  },
  critical: {
    borderTop: '10px solid rgba(255,99,45, 0.5)',
    backgroundColor: ' rgba(255,80,71, 0.5)',
    color: 'white',
  },
  deaths: {
    borderTop: '10px solid rgba(200,0,90, 0.5)',
    backgroundColor: ' rgba(255,0,0, 1)',
    color: 'white',
  },
  recovered: {
    borderTop: '10px solid rgba(89,120,45, 0.5)',
    backgroundColor: ' rgba(0,215,0, 1)',
    color: 'white',
  },
  tests: {
    borderTop: '10px solid rgba(90,215,0, 0.7)',
    backgroundColor: ' rgba(90,215,0, 0.7)',
    color: 'white',
  },
  today: {
    borderTop: '10px solid rgba(254,120,75, 0.5)',
    backgroundColor: 'rgba(220,120,220, 1)',
    color: 'white',
    alignItems: 'center',
  },
}));
