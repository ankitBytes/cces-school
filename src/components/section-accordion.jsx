import PropTypes from "prop-types";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
  "& .MuiAccordionSummary-root": {},
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

// main accrodion component
const SectionAccordion = (props) => {
  const {
    sectionId,
    onChange,
    expanded,
    heading,
    section_form,
    formStatus,
    ...others
  } = props;
  return (
    <Accordion
      expanded={expanded}
      onChange={onChange}
      TransitionProps={{ unmountOnExit: true }}
      sx={{
        "& .MuiAccordionSummary-root": {
          background: expanded ? "#91e1fa" : "#e1f4fa",
        },
      }}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Stack
          direction="row"
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{ width: "100%", marginLeft: ".5rem" }}
        >
          <Typography variant="body1">{heading}</Typography>
          <Typography
            variant="body2"
            color={formStatus[sectionId] === true ? "green" : "red"}
          >
            {formStatus[sectionId] === true ? "success" : "pending"}
          </Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{background:"#eefffe"}}>
        {section_form === undefined || section_form === null ? (
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        ) : (
          section_form({ ...others })
        )}
      </AccordionDetails>
    </Accordion>
  );
};

SectionAccordion.propTypes = {
  sectionId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  expanded: PropTypes.bool.isRequired,
  heading: PropTypes.string.isRequired,
  section_form: PropTypes.func.isRequired,
  formStatus: PropTypes.object,
  others: PropTypes.any,
};

export default SectionAccordion;
