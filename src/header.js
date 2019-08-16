import React from "react";
import styled from "styled-components";

const Hed = styled.header`
  display: flex;
  width: 100vw;
  justify-content: center;
  background-color: #000;
  height: 50px;
  label {
    cursor: pointer;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    background-color: #000;
    color: #fff;
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }
    input:checked ~ .checkmark {
      background-color: #2196f3;
    }
    .checkmark {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 10px;
    }
  }
  label:hover {
    background-color: #f0f0f0;
    color: #000;
  }
`;

class Header extends React.Component {
  render() {
    return (
      <Hed>
        {Object.keys(this.props.objOfHeaderField).map(val => (
          <label key={val} onClick={e => this.props.getFields("objOfContentList", this.props.objOfHeaderField[val])}>
            <input type="radio" name="header" />
            <span className="checkmark">{val}</span>
          </label>
        ))}
      </Hed>
    );
  }
}

export default Header;
