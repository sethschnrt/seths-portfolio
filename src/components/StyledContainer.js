/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import colors from '../utils/colors'; 

const containerStyles = css`
    background-color: ${colors.PRIMARY};
    color: ${colors.SECONDARY};
`;

function StyledContainer({ children }) {
    return (
        <div css={containerStyles}>
            {children} {/* this will render any child components or elements passed to StyledContainer */}
        </div>
    );
}

export default StyledContainer;
