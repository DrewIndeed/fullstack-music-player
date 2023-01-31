import NextImage from "next/image";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";

const SideBar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="#000000"
      paddingX="5px"
      color="gray"
    >
      <Box width="120px" marginBottom="20px" paddingX="20px">
        <NextImage
          width={120}
          height={60}
          src="/logo.webp"
          alt="Sidebar logo"
        />
      </Box>
    </Box>
  );
};

export default SideBar;
