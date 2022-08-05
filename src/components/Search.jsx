import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <>
      <Nav>
        <GiKnifeFork />
        <Logo to={"/"}>deliciousss</Logo>
      </Nav>
      <FormStyle onSubmit={handleSubmit}>
        <FaSearch></FaSearch>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </FormStyle>
    </>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;

const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 3rem;
  }
`;

const FormStyle = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 70%;
  margin: 0 auto;

  input {
    width: 100%;
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
  }

  svg {
    position: absolute;
    left: 1.5%;
    color: white;
    cursor: pointer;
  }
`;

export default Search;
