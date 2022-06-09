import React from "react";
import PropTypes from "prop-types";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type,
  backgroundColor,
  size,
  label,
  block,
  disable,
  isLoading,
  onClick,
  accLeft,
  accRight,
  ...props
}) => {
  const blockMode = block ? "storybook-button--block" : "";
  const isDisable = disable || isLoading;
  const isAccLeft = accLeft !== "";
  const isAccRight = accRight !== "";

  const icon = (
    <>
      <i
        className={`storybook-button-icon ${
          isAccLeft
            ? "storybook-button-icon--left"
            : isAccRight
            ? "storybook-button-icon--right"
            : ""
        }`}
      >
        {isAccLeft ? accLeft : isAccRight ? accRight : ""}
      </i>
    </>
  );

  const content = isAccLeft ? (
    <>
      {icon}
      {isLoading ? "Загрузка..." : label}
    </>
  ) : isAccRight ? (
    <>
      {isLoading ? "Загрузка..." : label}
      {icon}
    </>
  ) : (
    <>{isLoading ? "Загрузка..." : label}</>
  );

  return (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        `storybook-button--${type}`,
        blockMode,
      ].join(" ")}
      style={backgroundColor && { backgroundColor }}
      disabled={isDisable}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};

Button.propTypes = {
  /**
   * Цвет кнопки
   */
  type: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "danger",
    "success",
  ]),
  /**
   * Задать цвет кнопки вручную
   */
  backgroundColor: PropTypes.string,
  /**
   * Какого размера должна быть кнопка ?
   */
  size: PropTypes.oneOf(["small", "medium", "large", "big"]),
  /**
   * Контент кнопки
   */
  label: PropTypes.string.isRequired,
  /**
   * Действие при клике
   */
  onClick: PropTypes.func,
  /**
   * Растягивает кнопку по ширине родителя
   */
  block: PropTypes.bool,
  /**
   * Кнопка не активна
   */
  disable: PropTypes.bool,
  /**
   * Состояние загрузки / заблокирована пока идет запрос на сервер
   */
  isLoading: PropTypes.bool,
  /**
   * Иконка слева
   */
  accLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  /**
   * Иконка справа
   */
  accRight: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
};

Button.defaultProps = {
  backgroundColor: null,
  type: "primary",
  size: "medium",
  onClick: console.log("I work"),
  block: false,
  disable: false,
  isLoading: false,
  accLeft: "",
  accRight: "",
};
