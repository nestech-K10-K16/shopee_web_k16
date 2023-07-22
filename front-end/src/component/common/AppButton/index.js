import { TYPE_BUTTON } from "constants/common";
import React from "react";
import { Fragment } from "react";

const AppButton = (props) => {
  const { type = TYPE_BUTTON.HYPERLINK, buttonProps, ...rest } = props;

  const renderChildren = (type, props) => {
    switch (type) {
      case TYPE_BUTTON.HYPERLINK:
        return (
          <a className={props.className} href={props?.url} {...rest}>
            {props.content}
          </a>
        );

      default:
        return (
          <button className={props.className} {...rest}>
            {props.content}
          </button>
        );
    }
  };

  return <Fragment>{renderChildren(type, buttonProps)}</Fragment>;
};

export default AppButton;
