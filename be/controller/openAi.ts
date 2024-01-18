import { Request, Response, NextFunction } from "express";
import OpenAI from "openai";

const generateImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { prompt } = req.body;
  console.log(prompt);
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KE || "",
    });

    const response = await openai.images.generate({
      model: "dall-e-2",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });

    const imageUrl = response.data[0].url;
    console.log("response", response);

    res.status(200).json({
      success: true,
      message: "img generated succesfull",
      data: imageUrl,
    });
  } catch (error) {
    // next(error);
    res.status(400).json({
      success: false,
      message: "img generated unsuccesfull",
      data: {},
    });
  }
};

export { generateImage };
