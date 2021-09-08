import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import IconButtonBar from '../icon-button-bar';
import Image from '../image';

import './style.scss';

const Bio = ({ author, language = 'ko' }) => {
  const { bio, social, name } = author;

  if (!author) return null;
  return (
    <div className="bio-wrapper">
      <div className="bio">
        {(
          <div className="introduction korean">
            <p className="title">
              <br />
              <ReactRotatingText items={bio.description} />
              <br />
              {name}의 <strong>{bio.role}</strong>
              <br />
            </p>
            <div className="social-links">
              <IconButtonBar links={social} />
            </div>
          </div>
        )}
        <Image className="thumbnail" src={bio.thumbnail} alt="thumbnail" />
      </div>
    </div>
  );
};

export default Bio;
