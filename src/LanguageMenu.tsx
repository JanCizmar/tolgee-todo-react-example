import {Button, Menu, MenuItem} from "@material-ui/core";
import {useCurrentLanguage, useSetLanguage} from "@tolgee/react";
import React from "react";

export const LanguageMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const getLang = useCurrentLanguage();
    const setLang = useSetLanguage();

    const currentLang = getLang();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
            <Button aria-controls="language-menu" aria-haspopup="true" variant="outlined" onClick={handleClick}>
                {getLang()}
            </Button>
            <Menu
                id="language-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            > {["en", "cs"].map(lang =>
                <MenuItem key={lang} onClick={() => setLang(lang)} selected={currentLang === lang}>{lang}</MenuItem>
            )}
            </Menu>
        </>
    );
}