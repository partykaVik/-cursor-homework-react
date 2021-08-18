import React from 'react';
import Photo_1 from './../../assets/img/gallery/photo_1.webp';
import Photo_2 from './../../assets/img/gallery/photo_2.webp';
import Photo_3 from './../../assets/img/gallery/photo_3.webp';
import Photo_4 from './../../assets/img/gallery/photo_4.webp';
import Photo_5 from './../../assets/img/gallery/photo_5.webp';
import Photo_6 from './../../assets/img/gallery/photo_6.webp';
import Photo_7 from './../../assets/img/gallery/photo_7.webp';
import Photo_8 from './../../assets/img/gallery/photo_8.webp';
import Photo_9 from './../../assets/img/gallery/photo_9.webp';
import Photo_10 from './../../assets/img/gallery/photo_10.webp';
import Photo_11 from './../../assets/img/gallery/photo_11.webp';

const photoArray = [
	{ id: 1, path: Photo_1 },
	{ id: 2, path: Photo_2 },
	{ id: 3, path: Photo_3 },
	{ id: 4, path: Photo_4 },
	{ id: 5, path: Photo_5 },
	{ id: 6, path: Photo_6 },
	{ id: 7, path: Photo_7 },
	{ id: 8, path: Photo_8 },
	{ id: 9, path: Photo_9 },
	{ id: 10, path: Photo_10 },
	{ id: 11, path: Photo_11 },
];

function Gallery() {
	return (
		<div className="gallery">
			{photoArray.map(photo => (
				<img key={photo.id} src={photo.path} />
			))}
		</div>
	);
}
export default Gallery;
