import { ButtonLink } from '@/components/atoms/buttons/button';

export default function Page() {
    return (
        <>
            <ButtonLink
                href={'/'}
                variant='primary'
            >
                ButtonLink Primary
            </ButtonLink>
        </>
    );
}
