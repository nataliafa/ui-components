import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import uniqueId from "../../lib/unique-id";
import * as style from "../../lib/style";

const transitionOpacity = "opacity 300ms ease-in";

export const UnstyledContainer = styled.div`
  display: flex;
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const Container = styled(UnstyledContainer)`
  align-items: center;
`;

export const Items = styled.div``;

export const UnstyledItem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: ${transitionOpacity};
  opacity: ${(props) => (props.active ? 1 : 0)};
  z-index: ${(props) => (props.active ? 15 : -15)};
  background-image: url("${(props) => props.backgroundImage}");
  background-color: white;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export const Item = styled(UnstyledItem)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  border-radius: ${style.borderRadius};
`;

export const Title = styled.h5`
  margin: 0 0 10px 0;
  font-size: 20px;
  color: white;
`;

export const Text = styled.p`
  margin: 0 0 20px 0;
  font-size: 16px;
  color: white;
`;

export const UnstyledControls = styled.div`
  z-index: 20;
`;

export const Controls = styled(UnstyledControls)`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Arrow = styled.div`
  height: 45px;
  width: 45px;
  font-size: 21px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;

  &:hover,
  &:hover {
    outline: 0;
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const Engine = ({ slides, controls, item }) => {
  const [state, dispatch] = useReducer(reducer, {
    currentIndex: 0,
    slides: slides,
  });

  useEffect(() => {
    /* Preload images */
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.img;
    });
  }, [slides]);

  const prev = () => {
    dispatch({ type: ACTIONS.PREV });
  };

  const next = () => {
    dispatch({ type: ACTIONS.NEXT });
  };

  return (
    <>
      <Items>
        {state.slides.map((slide, index) => {
          const id = slide.id ? slide.id : uniqueId();
          return item(id, slide, state.currentIndex === index);
        })}
      </Items>
      {controls(prev, next)}
    </>
  );
};

const ACTIONS = {
  NEXT: "next",
  PREV: "prev",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.NEXT:
      return {
        ...state,
        currentIndex:
          state.currentIndex === state.slides.length - 1
            ? 0
            : state.currentIndex + 1,
      };
    case ACTIONS.PREV:
      return {
        ...state,
        currentIndex:
          state.currentIndex === 0
            ? state.slides.length - 1
            : state.currentIndex - 1,
      };
    default:
      return state;
  }
}

export const Slider = ({ slides, width, height, ...props }) => {
  return (
    <Container width={width} height={height} {...props}>
      <Engine
        {...props}
        slides={slides}
        item={(id, slide, active) => (
          <Item id={id} key={id} active={active} backgroundImage={slide.img}>
            <Title dangerouslySetInnerHTML={{ __html: slide.title }} />
            <Text dangerouslySetInnerHTML={{ __html: slide.text }} />
          </Item>
        )}
        controls={(prev, next) => (
          <Controls>
            <Arrow onClick={() => prev()}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </Arrow>
            <Arrow onClick={() => next()}>
              <FontAwesomeIcon icon={faChevronRight} />
            </Arrow>
          </Controls>
        )}
      />
    </Container>
  );
};
