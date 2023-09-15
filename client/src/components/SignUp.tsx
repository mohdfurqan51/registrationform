"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa6";
import { baseURL } from "../utils/constant";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { isLogin } from "../utils/auth";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [father, setFather] = useState("");
  const [mother, setMother] = useState("");
  const [wife, setWife] = useState("");
  const [kids, setKids] = useState("");
  const [urgentcontact, setUrgentcontact] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [nationalid, setNationalid] = useState("");

  const router = useRouter();

  useEffect(() => {
    const authenticate = async () => {
      if (await isLogin()) {
        router.push("/");
      }
    };
    authenticate();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      password,
      father,
      mother,
      wife,
      kids,
      urgentcontact,
      gender,
      country,
      nationalid,
    };

    axios
      .post(`${baseURL}/signup`, payload)
      .then((res) => {
        toast.success(
          <div>
            Account Created Successfully <br />
            Please Login
          </div>
        );
        router.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="grid grid-cols-[30%,1fr]">
      <div className="bg-accent h-screen grid place-items-center">
        <div className="text-center w-full text-white space-y-8">
          <h2 className="font-bold text-4xl">Welcome Back!</h2>
          <div className="text-[#eeeeee] w-fit mx-auto">
            <p>To keep connected with us please</p>
            <p>please login with your personal info</p>

            <Link href="/login">
              <button className="uppercase px-4 py-2 w-[100%] rounded-full border-2 mt-8">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-screen grid place-items-center">
        <div className="text-center">
          <h1 className="text-accent font-bold text-4xl mb-8">Create Account</h1>

          <form
            className="w-[300px] mx-auto pt-2 gap-2"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-rows-6 grid-flow-col gap-2">
              <div>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                  className="input__style"
                />
              </div>
              <div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  className="input__style col-span-2"
                />
              </div>

              <div>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  className="input__style"
                />
              </div>

              <div>
                <select
                  value={gender}
                  name="gender"
                  id="gender"
                  onChange={(e) => setGender(e.target.value)}
                  className="input__style w-full"
                  placeholder="Gender"
                >
                  <option value="none">
                    Choose Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <input
                  value={father}
                  onChange={(e) => setFather(e.target.value)}
                  type="text"
                  placeholder="Father Name"
                  className="input__style"
                />
              </div>

              <div>
                <input
                  value={mother}
                  onChange={(e) => setMother(e.target.value)}
                  type="text"
                  placeholder="Mother Name"
                  className="input__style"
                />
              </div>

              <div>
                <input
                  value={wife}
                  onChange={(e) => setWife(e.target.value)}
                  type="text"
                  placeholder="Wife Name"
                  className="input__style"
                />
              </div>

              <div>
                <input
                  value={kids}
                  onChange={(e) => setKids(e.target.value)}
                  type="number"
                  placeholder="Enter Number of Kids"
                  className="input__style"
                />
              </div>

              <div>
                <input
                  value={urgentcontact}
                  onChange={(e) => setUrgentcontact(e.target.value)}
                  type="number"
                  placeholder="Enter Urgent Contact"
                  className="input__style"
                />
              </div>

              <div>
                <input
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  placeholder="Country Name"
                  className="input__style"
                />
              </div>
              <div>
                <input
                  value={nationalid}
                  onChange={(e) => setNationalid(e.target.value)}
                  type="text"
                  placeholder="National ID (Optional)"
                  className="input__style"
                />
              </div>
              
            </div>

            <div>
              <button className="uppercase bg-accent hover:bg-accentDark px-4 py-2 text-white mt-4">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
