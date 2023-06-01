import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React from "react";

const FormComponent = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    mobile: "",
    address: "",
  });

  const toast = useToast();
  const handleChange = (e) => {
    if (e.target.name === "gender") {
      setFormData({
        ...formData,
        gender: e.target.value,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
    localStorage.setItem("formData", JSON.stringify(formData));

    console.log(formData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    toast({
      title: "Account created.",
      description: "We've created your account for you",
      status: "success",
      position: "top-right",
    });

    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      mobile: "",
      address: "",
    });
  };
  return (
    <Box boxShadow="md" p="3" w="lg" bg="#fff" borderRadius="md">
      <Heading textAlign="center" fontWeight="bold">
        Register Form
      </Heading>

      <form onSubmit={handleSubmit} autoComplete="off">
        <VStack align="stretch" mt="2" spacing="2">
          <HStack>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                value={formData.firstName}
                name="firstName"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                value={formData.lastName}
                name="lastName"
                onChange={handleChange}
              />
            </FormControl>
          </HStack>

          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={formData.email}
              name="email"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Mobile</FormLabel>
            <Input
              type="Number"
              value={formData.mobile}
              name="mobile"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <Select
              name="gender"
              onChange={handleChange}
              value={formData.gender}
              placeholder="Select gender"
            >
              <option>Male</option>
              <option>Female</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Textarea
              value={formData.address}
              type="text"
              name="address"
              onChange={handleChange}
            />
          </FormControl>
        </VStack>
        <Button type="submit" w="full" mt="2" colorScheme="telegram">
          Register
        </Button>
      </form>
    </Box>
  );
};

export default FormComponent;
