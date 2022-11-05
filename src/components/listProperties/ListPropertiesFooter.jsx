import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import { Box, Button, Pagination, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { InputsSearch, MediaScreenContext } from "../../context";

const ListPropertiesFooter = () => {
  const { isTabletOrMobile } = useContext(MediaScreenContext);
  const { pageNo, setPageNo } = useContext(InputsSearch);
  const { hotelsData } = useSelector((state) => state.hotel);
  const totalPages = Math.ceil(hotelsData?.hotels.length / 10);

  const [page, setPage] = useState(1);

  useEffect(() => {
    setPageNo(page * 10 - 10);
    window.scrollTo({
      top: 0,
    });
  }, [page, setPageNo]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box mt={2}>
      {!isTabletOrMobile && (
        <Typography
          variant="body2"
          component="span"
          fontFamily="inherit"
          color="#262626"
        >
          {hotelsData?.cityName}: {hotelsData?.hotels?.length} properties found
        </Typography>
      )}
      <Box
        sx={{
          pl: 2,
          pr: 2,
          pb: 0,
          mt: 1,
          border: { xs: "none", lg: "1px solid #e7e7e7" },
          borderRadius: "2px",
          overflow: "visible",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {!isTabletOrMobile ? (
          <>
            <Pagination
              count={totalPages}
              page={page}
              shape="rounded"
              size="small"
              onChange={handleChange}
              sx={{
                "& .MuiPaginationItem-root": {
                  color: (theme) => theme.palette.primary.light,

                  "&:hover": {
                    backgroundColor: (theme) => theme.palette.primary.light,
                    color: "#FFF",
                  },

                  "&.Mui-selected": {
                    color: "#6b6b6b",
                    backgroundColor: "transparent",
                    border: "1px solid #949494",

                    "&:hover": {
                      color: "#6b6b6b",
                      backgroundColor: "transparent",
                      cursor: "default",
                    },
                  },
                },
              }}
            />

            <Typography
              variant="body2"
              component="span"
              fontFamily="inherit"
              color="#262626"
            >
              Showing {pageNo + 1} –{" "}
              {page === totalPages ? hotelsData?.hotels.length : page * 10}
            </Typography>
          </>
        ) : (
          <Stack direction="row" alignItems="center" width={1}>
            {page > 0 && page < pageNo && (
              <Button
                variant="contained"
                size="large"
                sx={{ py: 2, px: 2 }}
                startIcon={<NavigateBefore />}
                onClick={() => setPage((prev) => prev - 1)}
              >
                Previous
              </Button>
            )}

            <Typography
              variant="h6"
              component="div"
              // color="#262626"
              flexGrow={1}
              textAlign="center"
            >
              {page} of {totalPages}
            </Typography>

            {page < totalPages && (
              <Button
                variant="contained"
                size="large"
                sx={{ py: 2, px: 3 }}
                endIcon={<NavigateNext />}
                onClick={() => page < totalPages && setPage((prev) => prev + 1)}
              >
                Next
              </Button>
            )}
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default ListPropertiesFooter;
