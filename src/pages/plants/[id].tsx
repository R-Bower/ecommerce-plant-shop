import {GetStaticPaths, GetStaticProps} from "next"
import {useRouter} from "next/router"
import React from "react"

import {PlantDto} from "~api/plants"

interface Props {
  plant?: PlantDto
}

export default function PlantDetailsPage({plant}: Props): React.ReactElement {
  const router = useRouter()

  React.useEffect(() => {
    console.debug(plant)
  }, [plant])

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return <></>
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.debug(process.cwd())
  const path = await import("path")
  const fse = await import("fs-extra")
  const fileData: any = fse.readJsonSync(
    path.resolve(process.cwd(), "src/pages/api/plants/data/plants.json"),
  )

  if (!fileData) {
    return {
      fallback: false,
      paths: [],
    }
  }

  return {
    fallback: false,
    paths: fileData.plants.map((plant: PlantDto) => ({params: {id: plant.id}})),
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  if (!params?.id) {
    return {
      props: {plant: undefined},
      revalidate: 1,
    }
  }
  const id = typeof params.id === "string" ? params.id : params.id[0]
  const path = await import("path")
  const fse = await import("fs-extra")
  const fileData: {plants: PlantDto[]} = fse.readJsonSync(
    path.resolve(process.cwd(), "src/pages/api/plants/data/plants.json"),
  )

  if (!fileData) {
    console.debug("Couldn't find plants")
    return {
      props: {
        plant: undefined,
      },
      revalidate: 1,
    }
  }

  const plant = fileData.plants.find((plant: PlantDto) => plant.id === id)

  return {
    props: {plant},
    revalidate: 1,
  }
}
