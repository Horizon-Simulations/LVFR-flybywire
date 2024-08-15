
# folder structure
set(OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/../../../build-a321neo/out/lvfr-horizonsim-airbus-a321-neo/SimObjects/Airplanes/A321neoLEAP/panel)

# add compiler definitions
add_definitions(-DA32NX)

add_subdirectory(extra-backend-a32nx)
add_subdirectory(fadec-a21n-leap)
add_subdirectory(fadec-a21n-pw)

# these are only here to allow CMake compatible IDEs (JetBrains' Clion for example) to show systax
# highlighting and allow code navigation
if (WIN32)
    add_subdirectory(fbw_a320)
endif ()
