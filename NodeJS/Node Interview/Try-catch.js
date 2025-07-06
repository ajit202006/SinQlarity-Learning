try{
    console.log("Something");
    throw new Error("throws Error");
}catch (error){
    console.error(error.message);
}