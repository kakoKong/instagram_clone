import { Button, Input } from "@chakra-ui/react"
import { useState } from "react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (<>
    <Input
      placeholder="Email"
      type="email"
      size={"sm"}
      value={input.email}
      onChange={(e) => setInput({ ...input, email: e.target.value })}
    />
    <Input
      placeholder="Password"
      type="password"
      size={"sm"}
      value={input.password}
      onChange={(e) => setInput({ ...input, password: e.target.value })}
    />

    <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
      Login
    </Button>
  </>
  )
}

export default Login