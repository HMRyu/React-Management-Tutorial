import './App.css';
import Customer from './components/Customer'
import { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  root : {
    width: '100%',
    overflowX : "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '1',
  'birthday' : '111111',
  'gender' : '1',
  'job' : '1'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '2',
  'birthday' : '222222',
  'gender' : '2',
  'job' : '2'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '3',
  'birthday' : '333333',
  'gender' : '3',
  'job' : '3'
}
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}> 
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
        {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })
      }
      </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
