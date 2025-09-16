// stack for screens inside the gallery module
export type GalleryStackParamList = {
	Home: undefined;
	PhotoDetail: { url: string };
	FullScreenModal: { url: string };
  };
  
  // drawer for the gallery module
  export type GalleryDrawerParamList = {
	'Gallery': undefined; // this will render the stack
  };
  
