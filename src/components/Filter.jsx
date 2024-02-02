
import { nanoid } from 'nanoid';

export const Filter = ({ value, onChangeFilter }) => {
  
    return (
      <label htmlFor={nanoid()}>
        Find contacts by name
        <input
          value={value}
          type="text"
          placeholder="find contact"
          onChange={onChangeFilter}
        />
      </label>
    );
  }


// export class Filter extends Component {
//   render() {
//     const { value, onChangeFilter } = this.props;
//     return (
//       <label htmlFor={nanoid()}>
//         Find contacts by name
//         <input
//           value={value}
//           type="text"
//           placeholder="find contact"
//           onChange={onChangeFilter}
//         />
//       </label>
//     );
//   }
// }