import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import Link from 'next/link';
import SignUp from '../components/SignUp'; // Adjust the path according to your project structure

export default function SignUpPage() {
    return (
        <Container maxWidth="md">
            <AppBar position="static" sx={{ backgroundColor: "#3f51b5" }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Flashcard SaaS
                    </Typography>
                    <Button color="inherit">
                        <Link href="/sign-in" passHref>
                            <a>Login</a>
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link href="/sign-up" passHref>
                            <a>Sign Up</a>
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                sx={{ mt: 4 }}
            >
                <Typography variant="h4">
                    Sign Up
                </Typography>
                <SignUp />
            </Box>
        </Container>
    );
}
