import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import Slide from './Slide';
import Controller from './Controller';

import './styles.scss';

export default function Slider({ slides, delay, automatic }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  useEffect(() => {
    if (automatic) {
      const timer = setTimeout(() => {
        next();
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [current]);

  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={
                index === current ? 'carousel-item active' : 'carousel-item'
              }
            >
              <Slide
                title={slide.title}
                content={slide.content}
                slug={slide.slug}
                picture={slide.picture}
                tag={slide.category}
              />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" onClick={prev}>
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" onClick={next}>
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="controllers">
        {slides.map((slide, index) => (
          <Controller
            key={index}
            title={slide.title}
            content={slide.content}
            slug={slide.slug}
            tag={slide.category}
            active={index === current}
          />
        ))}
      </div>
    </div>
  );
}

Slider.propTypes = {
  slides: PropTypes.array.isRequired,
  delay: PropTypes.number.isRequired,
  automatic: PropTypes.bool,
};

Slider.defaultProps = {
  automatic: false,
};
