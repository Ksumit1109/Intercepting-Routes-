import Modal from "@/components/Modal";
import PhotoDetails from "@/components/PhotoDetails";
import type { Photo } from "@/lib/types";
import { notFound } from "next/navigation";
import { getPhoto } from "@/lib/unsplash";

interface PhotoModalPageProps {
  params: {
    id: string;
  };
}

const PhotoModalPage = async ({ params }: PhotoModalPageProps) => {
  try {
    const response = await getPhoto(params.id);

    if (!response.ok) {
      notFound();
    }

    const photo: Photo = await response.json();

    return (
      <Modal>
        <PhotoDetails
          src={photo.urls.regular}
          alt={photo.alt_description}
          photographer={{
            name: photo.user.name,
            instagram: photo.user.social.instagram_username,
          }}
        />
      </Modal>
    );
  } catch (error) {
    console.error("Error fetching photo:", error);
    notFound();
  }
};

export default PhotoModalPage;
