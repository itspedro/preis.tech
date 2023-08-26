import { addOpacity } from "@/utils/misc";
import styled from "styled-components";

export const MDXContainer = styled.article<{ 
  $isScrolling: boolean,
}>`
  display: flex;
  text-align: justify;
  flex-direction: column;
  width: 45%;
  margin: 0 auto;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.8;

  @media (min-width: 1400px) {
    border-left: 1px solid ${props => props.theme.text20};
    padding-left: 50px;
  };

  @media (min-width: 1400px) {
    width: 40%
  };

  @media (max-width: 768px) {
    width: 90%;
  };

  h1,h2,h3,h4,h5,h6 {
    display: flex;
    align-items: center;
    position: relative;
    margin: 20px 0;

    &:hover {
      .autolink-header {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
      };
    };
  };

  h1 {
    font-family: inherit;
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 20px;
  };

  h2 {
    font-family: inherit;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
  };

  h3 {
    font-family: inherit;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
  };

  .autolink-header {
    color: ${props => props.theme.text};
    text-decoration: none;
    display: none;
    position: absolute;
    left: -32px;

    background-color: ${props => addOpacity(props.theme.secondary, 0.7)};
    backdrop-filter: blur(30px);
    border: 1px solid ${props => props.theme.secondary};
    border-radius: 5px;

    &:hover {
      color: ${props => props.theme.primary};
    };
  };

  .visually-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: auto;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
  }

  blockquote {
    font-size: 18px;
    font-style: italic;
    margin: 20px 0;
    padding: 0 10px;
    border-left: 5px solid ${props => props.theme.primary};
    background: ${props => props.theme.secondary};
    border-radius: 4px;
  };


  a {
    color: ${props => props.theme.primary};
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    };
  };

  p {
    margin: 20px 0;
  };

  ul,
  ol {
    margin: 20px 0;

    li {
      position: relative;
      margin: 10px 0;
      padding-left: 20px;

      & + li {
        margin-top: 0;
      }

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 12px;
        height: 12px;
        border-radius: 4px;
        background: ${props => props.theme.text80};
      };
    }
  }

  li {
    margin: 10px 0;
  };

  ul, ol {
    margin: 20px 0;
  };

  code {
    font-size: 14px;
    background: ${props => props.theme.tertiary};
    padding: 5px;
    border-radius: 4px;
    color: #FFFFFF;
  };

  img {
    margin: 16px auto;
    border-radius: 4px;
  };

  iframe {
    max-width: 100%;
    margin: 16px auto;
    aspect-ratio: auto;
    border-radius: 4px;
  };

  .toc-title {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid ${props => props.theme.text20};
    color: #fff;

    a {
      display: none;
      ${(props) => props.$isScrolling && `
        display: inline-block;
      `};
    };
  };

  .toc {
    position: absolute;
    font-size: 14px;
    background-color: ${props => addOpacity(props.theme.tertiary, 0.7)};
    backdrop-filter: blur(30px);
    border-radius: 8px;
    border: 1px solid ${props => props.theme.text20};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 1;
    top: 30%;
    left: 75%;
    max-width: 300px;
    width: 100%;
    padding: 10px;

    li {
      margin: 10px 0;
      padding-left: 10px;
      list-style: none;

      &::before {
        content: '';
        background: transparent;
      };
    };

    ${(props) => props.$isScrolling && `
      position: fixed;
      top: 11%;
    `};
    @media (max-width: 1200px) {
      display: none;
    };
  };

  table {
    width: 100%;
    margin: 20px 0;
    font-size: 14px;
    border-collapse: collapse;
    overflow: hidden;
    border-radius: 8px;
    background-color: ${props => addOpacity(props.theme.tertiary, 0.2)};

    thead {
      tr {
        border-bottom: 1px solid ${props => props.theme.text20};
        th {
          padding: 10px;
        }
      }
    }

    tbody {

      tr {
        td {
          padding: 10px;
          align-items: top;
        }
      }
    }

    th,td {
      &:first-child {
        border-right: 1px solid ${props => props.theme.text20};
      }
    }

  };

`