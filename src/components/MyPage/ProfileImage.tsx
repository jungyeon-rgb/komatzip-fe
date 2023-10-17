import axiosInstance from '../../api/apiInstance';

const ProfileImage = ({ profileImage }: { profileImage: string | null }) => {
  const handleImageUpload = async () => {
    try {
      const response = await axiosInstance.post('/v1/images');
      console.log('이미지 업로드 완료!', response);
    } catch (error) {
      console.error('😥 이미지 업로드 실패', error);
    }
  };

  return (
    <section>
      <div className="mb-10 flex justify-center items-center rounded-full border-2 w-[150px] h-[150px]">
        {profileImage ? (
          <img src={profileImage} alt="프로필 이미지" />
        ) : (
          <p>No image</p>
        )}
      </div>
      <div className="mb-1">
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageUpload}
          id="imageUploadInput"
        />
        <label
          htmlFor="imageUploadInput"
          className="h-8 w-32 bg-yellow-500 text-white rounded-lg"
        >
          이미지 업로드
        </label>
      </div>
      <div>
        <button className=" w-32 text-yellow-500">이미지 제거</button>
      </div>
    </section>
  );
};

export default ProfileImage;
