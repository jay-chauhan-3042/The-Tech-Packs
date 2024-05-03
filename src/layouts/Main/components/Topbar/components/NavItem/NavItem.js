import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Outlet, Link } from 'react-router-dom';

const NavItem = ({ title, id, link, colorInvert = false }) => {
  const linkColor = colorInvert ? 'common.white' : 'text.primary';

  return (
    <>
      <Box>
        <Link to={link} style={{textDecoration: 'none'}}>
          <Box
            display={'flex'}
            alignItems={'center'}
            aria-describedby={id}
            sx={{ cursor: 'pointer' }}
          >
            <Typography
              color={linkColor}
            >
              {title}
            </Typography>
          </Box>
        </Link>
      </Box>

      <Outlet />
    </>
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  colorInvert: PropTypes.bool,
};

export default NavItem;
