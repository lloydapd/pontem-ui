import { 
    Box, Text, Flex, RangeSlider, 
    RangeSliderTrack, RangeSliderFilledTrack, 
    RangeSliderThumb, Square, Button
} from '@chakra-ui/react'
import Carousel from 'react-elastic-carousel'

const RoadMapItem = ({}) => {
    return (
        <Box w="4000px" bgColor="red" color="white" h="200px">
           hello
        </Box>
    )
}

export const RoadMap = ({ children, ref }) => {
    return (
        <Carousel
            showArrows={false}
            itemsToShow={1}
            renderPagination={({ pages, activePage, onClick }) => {
                return (
                    <Flex direction="row" mt="30px">
                        {pages.map(page => {
                            const isActivePage = activePage === page
                            return (
                                <Button
                                    bgColor="red"
                                    key={page}
                                    onClick={() => onClick(page)}
                                    active={isActivePage}
                                    />
                            )
                        })}
                    </Flex>
                )
            }}
            >
            <RoadMapItem/>
            <RoadMapItem/>
        </Carousel>
    )
}