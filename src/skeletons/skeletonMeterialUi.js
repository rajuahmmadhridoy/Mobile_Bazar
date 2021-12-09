import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

function SkeletonMeterialUi(props) {
    const { loading = false } = props;

    return (
        <Grid container wrap="nowrap">
            {(loading ? Array.from(new Array(3)) : 12).map((item, index) => (
                <Box key={index} sx={{ width: 380, marginRight: 0.5, my: 5 }}>
                    <Skeleton variant="rectangular" width={380} height={118} />
                    <Box sx={{ pt: 0.5 }}>
                        <Skeleton />
                        <Skeleton width="60%" height="20%" />
                    </Box>
                </Box>
            ))}
        </Grid>
    );
}

SkeletonMeterialUi.propTypes = {
    loading: PropTypes.bool,
};

export default SkeletonMeterialUi;
