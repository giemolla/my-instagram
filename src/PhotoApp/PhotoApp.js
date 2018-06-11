import React, { Component } from 'react';
import photos from '../Data/fakeData';
import PhotoBox from '../PhotoBox/PhotoBox';

class PhotoApp extends Component {
    render() {
        const photos = this._getPhotos();
        return (
            <div className="container">
                <div className="row">
                    {photos}
                </div>
            </div>
        );
    }
    _getPhotos() {
        const photoList = photos;

        return photoList.map((photo) => {
            return (
                <PhotoBox 
                    key={photo.id}
                    id={photo.id}
                    src={photo.imgUrl}
                    text={photo.desc}
                    likes={photo.likes}
                    comments={photo.comments}
                />
            );
        });
    }
}

export default PhotoApp;