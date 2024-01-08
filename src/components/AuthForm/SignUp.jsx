import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

const SignUp = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    fullName: "",
    username: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  return (<>
    <Input
      placeholder="Email"
      type="email"
      size={"sm"}
      value={input.email}
      onChange={(e) => setInput({ ...input, email: e.target.value })}
    />
    <Input
      placeholder="Username"
      type="text"
      size={"sm"}
      value={input.username}
      onChange={(e) => setInput({ ...input, username: e.target.value })}
    />
    <Input
      placeholder="Full Name"
      type="text"
      size={"sm"}
      value={input.fullName}
      onChange={(e) => setInput({ ...input, fullName: e.target.value })}
    />
    <InputGroup>
    <Input
      placeholder="Password"
      type={showPassword ? "text" : "password"}
      value={input.password}
      size={"sm"}
      onChange={(e) => setInput({ ...input, password: e.target.value })}
    />
    <InputRightElement h="full">
      <Button variant={"ghost"} size={"sm"} onClick={()=> setShowPassword(!showPassword)}>
        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
      </Button>
    </InputRightElement>
    </InputGroup>


    <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
      Sign Up
    </Button>
  </>
  )
}

export default SignUp