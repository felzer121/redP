import {useEffect, useState} from "react";
import { useRouter } from "next/router";

function createSignUpLink(stag) {
  const link = "https://app.red-affiliates.com/partner/register";
  if (stag) {
    return link + `?stag=${stag}`;
  }
  return link;
}


function SignUpButton(props) {
  const [signUpLink, setSignUpLink] = useState("");
  const router = useRouter();

  useEffect(() => {
    const stag = router.query.stag || JSON.parse(localStorage.getItem("stag"));
    setSignUpLink(createSignUpLink(stag));
  }, [router]);

  return (
    <a
      href={signUpLink}
      {...props}
    />
  );
}

export default SignUpButton;
