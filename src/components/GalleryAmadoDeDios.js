import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import './GalleryAmadoDeDios.css'

const GalleryAmadoDeDios = () => {
    const data = useStaticQuery(
        graphql`
        query CloudinaryImage {
            allCloudinaryMedia {
            edges {
                node {
                    secure_url
                    context {
                        custom {
                            alt
                            caption
                        }
                    }
                    resource_type
                }
            }
            }
        }`
    );
    const images = data.allCloudinaryMedia.edges;
    return (
        <div className="container">
            {images.map((image, index) => (
                <figure className="wave" key={`${index}-image`}>
                    <img 
                        src={image.node.secure_url} 
                        alt={image.node.context.custom.alt} >
                    </img>
                    <figcaption>{image.node.context.custom.caption}</figcaption>
                </figure>
                ))
            }
        </div>
    )
};

export default GalleryAmadoDeDios;