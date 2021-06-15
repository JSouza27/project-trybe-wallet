import React from 'react';

// export default function InputField({
//   id,
//   name,
//   type,
//   onChange,
//   maxLength,
// }) {
//   return (
//     <input
//       id={ id }
//       name={ name }
//       type={ type }
//       onChange={ onChange }
//       maxLength={ maxLength }
//     />
//   );
// }
export default function fieldValue() {
  return (
    <label htmlFor="value">
      Valor
      <input
        id="value"
        name="value"
        type="text"
        onChange={ (e) => { this.handleChange(e); } }
      />
    </label>
  );
}