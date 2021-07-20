import { useState } from 'react'
import { createImage } from '../../store/images'
import { useDispatch, useSelector } from 'react-redux'

const CreateImage = () => {
  const [userId, setUserId] = useState(null);
  const [albumId, setAlbumId] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  const image = useSelector((state) => state.session.image)

  const handleSubmit = e => {
    console.log(image)
    e.preventDefault();
    let newErrors = [];
    dispatch(createImage({ userId, albumId, imageUrl, content }))
      .then(() => {
        setUserId(1);
        setAlbumId(null);
        setImageUrl(null);
        setContent('');
      })
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          newErrors = data.errors;
          setErrors(newErrors);
        }
      });
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImageUrl(file);
  };

  return (
    <>
      <div>
        <h1>Post</h1>
        <form style={{ display: "flex", flexFlow: "column" }}
          onSubmit={handleSubmit}>
          <label>content
            <textarea
              type="text" placeholder='content'
            />
          </label>
          <label>files
            <input
              type='file' onChange={updateFile}
            />
          </label>
          <button type="submit">Post photo</button>
        </form>
      </div>
    </>
  )
}

export default CreateImage;