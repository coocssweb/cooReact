/**
 * Created by coocss on 2019/1/11.
 */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  padding: 10px;
`;

const Pre = styled.pre`
  text-align: left;
  margin: 2px 0;
  line-height: 1.3;
`;

const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
  color: #fff;
`;

export default (props) => {
    return (
        <Highlight {...defaultProps} code={props.children} language="jsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <div className={className} style={style}>
          {tokens.map((line, i) => (
              <Pre {...getLineProps({ line, key: i })}>
                  <LineNo>{i + 1}</LineNo>
                  {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
              </Pre>
          ))}
        </div>
            )}
        </Highlight>
    );
};
