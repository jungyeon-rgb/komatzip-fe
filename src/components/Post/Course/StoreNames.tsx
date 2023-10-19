import { Course } from '@to1step/propose-backend';
import { useState } from 'react';
import CourseModal from '../../Modal/CourseModal';

interface StoreNamesProps {
  stores: Course[];
}

const StoreNames = ({ stores }: StoreNamesProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStoreUuid, setSelectedStoreUuid] = useState<string | null>(
    null,
  );

  const openModal = (uuid: string) => {
    setSelectedStoreUuid(uuid);
    setIsModalOpen(true);
  };

  const closeModal = (uuid: string) => {
    setSelectedStoreUuid(uuid);
    setIsModalOpen(false);
  };

  return (
    <section className="relative flex-row justify-center items-center transition-all duration-300 ease-in-out transform  hover:ring-4 hover:ring-amber-500 hover:rounded-xl">
      {stores.map((store) => {
        let categoryString;

        switch (store.category) {
          case 0:
            categoryString = '☕';
            break;
          case 1:
            categoryString = '🥞';
            break;
          case 2:
            categoryString = '⛲';
            break;
          default:
            categoryString = '✨';
            break;
        }

        return (
          <span
            key={`${store.uuid}-${store.name}`}
            className="text-l relative cursor-pointer"
            onClick={() => openModal(store.uuid)}
          >
            <div className="absolute h-full border-l-8 border-black border-orange-300 mx-2.5"></div>
            <div>
              <div className="relative h-[50px]">
                <span className="absolute text-[23px]">{categoryString}</span>
                <span className="ml-10">{store.name}</span>
              </div>
            </div>
          </span>
        );
      })}

      {isModalOpen && (
        <CourseModal
          closeModal={closeModal}
          store={selectedStore}
          courseInfo={selectedCourseInfo}
          uuid={selectedStoreUuid} // Pass the uuid
          courseUUID={selectedCourseInfo.uuid} // Pass the courseUUID
        />
      )}
    </section>
  );
};

export default StoreNames;
